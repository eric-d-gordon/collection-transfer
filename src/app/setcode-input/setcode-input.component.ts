import { Component, OnInit } from '@angular/core';
import { mergeMap } from 'rxjs';
import { CardCollectionCsvEntry } from '../cardCollectionCsv';
import { CardCollectionEntry } from '../cardCollectionEntry';
import { CardDataObject } from '../cardDataObject';
import { CardInfoReponseItem } from '../cardInfoReponseItem';
import { CardSetsInfoItem } from '../cardSetInfoResponseItem';
import { CardSetObject } from '../cardSetObject';
import { YgoLookupService } from '../ygo-lookup.service';

const csvHeader = 'cardname\tcardq\tcardid\tcardrarity\tcardcondition\tcard_edition\tcardset	cardcode\n';

@Component({
  selector: 'app-setcode-input',
  templateUrl: './setcode-input.component.html',
  styleUrls: ['./setcode-input.component.css']
})
export class SetcodeInputComponent implements OnInit {

  cardCollectionText: String = "";
  cardCollection: CardCollectionEntry[] = [];
  setName: String = "";
  setList: CardDataObject[] = [];
  message: String = "Enter card set code.";
  collectionCsv: String = "";
  edition: String = "";

  constructor(private ygoLookupService: YgoLookupService) { }

  ngOnInit(): void {
  }

  setCodeNameLookup() {
    new Promise<String>((resolve, rejects) => { 
      this.cardCollection = this.ygoLookupService.convertToCollectionEntries(this.cardCollectionText)
      resolve(this.cardCollection[0].setCode);
    })
    .then((setCode) => this.callLookUpWithSetCode(setCode));

    this.message = 'Looking up...';
  }

  private callLookUpWithSetCode(setCode : String) : void {
    this.ygoLookupService.setNameLookUp(setCode)
      .pipe(mergeMap(
        (r) => {
          let theSetName = r.set_name;
          this.setName = theSetName;
          return this.ygoLookupService.cardListLookUp(theSetName);
        }
      )).subscribe({
        next: response => {
          this.message = `Found cards for: ${this.setName}`;
          return this.createReturnCsv(response.data);
        },
        error: () => {
          this.message = 'Error';
        }
      });
  }

  private createReturnCsv(cardList: CardDataObject[]) : void {
    let collectionCsvEntries: CardCollectionCsvEntry[] = [];

    cardList.forEach(card => {
      let cardSetRarity: String = "";
      let cardSetName: String = "";
      const cardMatch = this.cardCollection.find(collectCard => card.card_sets.find(set => {
        let result = set.set_code == collectCard.setCode;
        cardSetRarity = set.set_rarity;
        cardSetName = set.set_name;
        return result;
      }));
      if (cardMatch !== undefined) {
        collectionCsvEntries.push(
          {
            cardName: card.name,
            cardQ: cardMatch.quantity.toString(),
            cardId: card.id,
            cardRarity: cardSetRarity,
            cardCondition: 'NM',
            cardEdition: this.edition,
            cardSet: cardSetName,
            cardCode: cardMatch.setCode,
          }
        )
      }
    });

    this.collectionCsv = csvHeader;
    collectionCsvEntries.forEach( entry => {
      this.collectionCsv = this.collectionCsv.concat(
          `${entry.cardName}\t`,
          `${entry.cardQ}\t`,
          `${entry.cardId}\t`,
          `${entry.cardRarity}\t`,
          `${entry.cardCondition}\t`,
          `${entry.cardEdition}\t`,
          `${entry.cardSet}\t`,
          `${entry.cardCode}\n`
        )
      }
    )
  }
}

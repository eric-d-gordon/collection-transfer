import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CardSetsInfoItem } from './cardSetInfoResponseItem';
import { Observable } from 'rxjs';
import { CardInfoReponseItem } from './cardInfoReponseItem';
import { CardCollectionEntry } from './cardCollectionEntry';


@Injectable({
  providedIn: 'root'
})
export class YgoLookupService {

  cardSetInfoUrl: String = 'https://db.ygoprodeck.com/api/v7/cardsetsinfo.php?setcode=';
  cardinfoUrl: String = 'https://db.ygoprodeck.com/api/v7/cardinfo.php?cardset=';

  constructor(private http: HttpClient) { }

  setNameLookUp(setCode: String) : Observable<CardSetsInfoItem> {
    return this.http.get<CardSetsInfoItem>(`${this.cardSetInfoUrl}${setCode}`)
  }

  cardListLookUp(setName: String) : Observable<CardInfoReponseItem> {
    return this.http.get<CardInfoReponseItem>(`${this.cardinfoUrl}${setName}`);
  }

  convertToCollectionEntries(cardCollection: String) : CardCollectionEntry[] {
    let collection : CardCollectionEntry[] = [];
    cardCollection.split('\n').forEach(s => {
      let entry = s.split('\t');
      collection.push({
        quantity: Number.parseInt(entry[0]),
        setCode: entry[1]
      });
    });
    return collection;
  }
}

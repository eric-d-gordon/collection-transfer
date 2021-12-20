import { CardImageObject } from "./cardImageObject";
import { CardPriceObject } from "./cardPriceObject";
import { CardSetObject } from "./cardSetObject";

export interface CardDataObject {
        id: String;
        name: String;
        type: String;
        desc: String;
        atk: String;
        def: String;
        level: String;
        race: String;
        attribute: String;
        card_sets: CardSetObject[];
        card_images: CardImageObject[];
        card_prices: CardPriceObject[];
}
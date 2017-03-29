export class ListingModel {
  categories: Array<ListingItemModel>;
}

export class ListingItemModel {
  id: number;
  title: string;
  image: string;
}

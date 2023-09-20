import { RecentPostInterface } from '../../../models/recent.post/recent.post.interface';

export interface RecentPostStateInterface {
  entities: { [key: string]: RecentPostInterface },
  ids: number[],
}

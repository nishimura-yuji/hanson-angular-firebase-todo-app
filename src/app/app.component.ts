import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
// interface Item {
//   id: string;
//   name: string;
//   age: number;
// }

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  // /** 取得したドキュメントを格納 */
  // private itemDocument: AngularFirestoreDocument<Item>;
  // /** 取得したコレクションを格納 */
  // private itemsCollection: AngularFirestoreCollection<Item>;

  // /** ドキュメントのストリームを格納 */
  // item: Observable<Item | undefined>;
  // /** コレクションのストリームを格納 */
  // items: Observable<Item[] | undefined>;

  user$ = this.auth.user$;

  constructor(private auth: AuthService) {
    // /** todos/aToPHmWQDJLoKPVA8Z5S */
    // this.itemDocument = afs.doc<Item>('todos/aToPHmWQDJLoKPVA8Z5S');
    // /** todosコレクションを取得してitemDocumentに代入 */
    // this.itemsCollection = afs.collection<Item>('todos');
    // /** 取得したドキュメントをストリームに変換 */
    // this.item = this.itemDocument.valueChanges();
    // /** 取得したコレクションをストリームに変換 */
    // this.items = this.itemsCollection.valueChanges();
  }
  // login() {
  //   this.aAuth.signInWithPopup(new auth.GoogleAuthProvider());
  //   console.log({ auth: this.aAuth });
  //   this.aAuth.user
  //     .pipe(tap((data) => console.log('uid', data?.uid)))
  //     .subscribe((result) => {
  //       console.log({ result });
  //     });
  // }

  login() {
    this.auth.login();
  }
  logout() {
    this.auth.logout();
  }
}

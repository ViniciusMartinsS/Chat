import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Rx';
/**
 * Generated class for the ChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 @IonicPage()
 @Component({
 	selector: 'page-chat',
 	templateUrl: 'chat.html',
 })
 export class ChatPage {

 	username: string = '';
 	message: string = '';
 	s;
 	vejas;
 	messages: object [] = [];

 	constructor(public db: AngularFireDatabase,
 		public navCtrl: NavController, public navParams: NavParams) {
 		this.username = this.navParams.get('username');
 		this.s =this.db.list('/chat').valueChanges().subscribe(data =>{
 			this.vejas = data;
 			console.log( this.vejas);
 			data.map( elem => {
 				//this.messages = elem;
 				//console.log(elem.username);
 				//console.log(elem.message);
 				//console.log( this.messages );
 			})
 		});
 			
 	}


 	enviarMensagem() {
 		this.db.list('/chat').push({
 			username: this.username,
 			message: this.message
 		}).then( () => {
        // message is sent
    });
 		this.message = '';
 	}

 	ionViewWillLeave(){
 		this.s.unsubscribe();
 		this.db.list('/chat').push({
 			specialMessage: true,
 			message: this.username + ' saiu da conversa! '
 		})
 	}

 	ionViewDidLoad() {
 		this.db.list('/chat').push({ 
 			specialMessage: true,
 			message: this.username + ' acaba de entrar na conversa! '
 		})
 	}

 }




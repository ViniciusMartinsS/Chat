import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { ChatPage } from '../chat/chat';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {

	username: string = '';
	

	constructor(public navCtrl: NavController,
		private alertCtrl: AlertController) {

	}

	alert(title: string, message: string) {
		const alert = this.alertCtrl.create({
			title: title,
			subTitle: message,
			buttons: ['Entendido']
		});
		alert.present();
	}

	login(){
		let palavras_proibidas = ['filhadaputa', 'puta', 'caralho', 'porra', 'arrombado', 'paunocu', 'trouxa', 'vaitomarnocu', 'vtnc', 'fdp', 'vsf', 'cu', 'pinto', 'buceta'];
		let aviso = 0;

		for (let palavra of palavras_proibidas) {
			if (this.username.toLowerCase() === palavra) {
				aviso = 1;
			}
		}

		if(/^[a-zA-Z0-9]+$/.test(this.username) && aviso != 1){
			this.navCtrl.push(ChatPage, {
				username: this.username
			}); 
		}else{
			this.alert('Ops...', 'Username inválido! ');
		}
	}

}


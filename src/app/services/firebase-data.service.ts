import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { initializeApp } from 'firebase/app';
import { Firestore, getFirestore, collection, addDoc, getDocs, deleteDoc, doc, updateDoc, DocumentData, CollectionReference, onSnapshot, QuerySnapshot } from 'firebase/firestore'
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Station } from '../models/station.model';

@Injectable({
  providedIn: 'root'
})
export class FirebaseDataService {

  private strCollection = "station";


  constructor(private firestore: AngularFirestore){ }

  getAllStation(){
    return this.firestore.collection(this.strCollection).snapshotChanges();
  }

  getStationDoc(id: string){
    return this.firestore.collection(this.strCollection).doc(id).snapshotChanges()
  }

  createStation(station: Station){
    return new Promise<any>((resolve, reject) => {
      this.firestore
          .collection(this.strCollection)
          .add(station)
          .then(
            res => {
              console.log(res);
            },
            err => {
              console.log(err);
            })
    });
  }

  deleteStation(station: Station){
    return this.firestore
                .collection(this.strCollection)
                .doc(station.id)
                .delete()
  }


  updateStation(station: Station){
    return this.firestore
                .collection(this.strCollection)
                .doc(station.icao)
                .update(station);
  }
}

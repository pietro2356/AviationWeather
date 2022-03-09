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


  constructor(private firestore: AngularFirestore) { }

  getAllStation() {
    return this.firestore.collection(this.strCollection).snapshotChanges();
  }

  getStationDoc(id: string) {
    return this.firestore.collection(this.strCollection).doc(id).snapshotChanges()
  }

  createStation(station: Station) {

    this.getStationDoc(station.icao).forEach(item => {
      // console.log(item.payload.exists === false);
      // if (item.payload.exists === false) {
      //   return new Promise<any>((resolve, reject) => {
      //     
      //   });
      // }else{
      //   return false
      // }

      try {

        if (item.payload.exists === false) {
          this.firestore.collection(this.strCollection).doc(station.icao).set(station);
          return true
        }else{
          return false
        }
      } catch (error) {
        return false
      }
    })
    return false;
    
  }

  deleteStation(station: Station) {
    return this.firestore
      .collection(this.strCollection)
      .doc(station.id)
      .delete()
  }


  updateStation(station: Station) {
    return this.firestore
      .collection(this.strCollection)
      .doc(station.icao)
      .update(station);
  }

  checkIfExists(ICAO: string) {
    const db = this.getStationDoc(ICAO);
    console.log(db);
    
  }
}

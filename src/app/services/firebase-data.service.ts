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

  private dbPath = 'station';
  stationRef: AngularFirestoreCollection<Station>;


  constructor(private db: AngularFirestore){
    this.stationRef = db.collection(this.dbPath);
  }

  getStation(){
    return this.stationRef;
  }

  createStation(station: Station){
    return this.stationRef.add(station);
  }

  updateStation(id: string, data: Station){
    return this.stationRef.doc(id).update(data);
  }

  deleteStation(id: string){
    return this.stationRef.doc(id).delete();
  }

  // db: Firestore;
  // stationCol: CollectionReference<DocumentData>;
  // private updatedSnap = new Subject<QuerySnapshot<DocumentData>>();
  // obsr_UpdatedSnap = this.updatedSnap.asObservable();

  
  // constructor() {
  //   // FIREBASE
  //   initializeApp(environment.firebaseConfig);
  //   this.db = getFirestore();
  //   this.stationCol = collection(this.db, 'station');

  //   onSnapshot(this.stationCol, (snap) => {
  //     this.updatedSnap.next(snap);
  //   }, (err) => {
  //     console.log(err);
  //   })
  // }


  // async getStation() {
  //   const snap = await getDocs(this.stationCol)
  //   return snap;
  // }

  // async addStation(station: Station) {
  //   await addDoc(this.stationCol, station);
  //   return;
  // }

  // async deleteStation(stationID: string) {
  //   const docRef = doc(this.db, 'station', stationID)
  //   await deleteDoc(docRef);
  //   return;
  // }

  // async updateStation(docId: string, station: Station) {
  //   const docRef = doc(this.db, 'students', docId);
  //   // JSON.parse(employeeString)
  //   await updateDoc(docRef, JSON.parse(station.toString()), station)
  //   return;
  // }
}

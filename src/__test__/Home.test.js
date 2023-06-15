import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { initializeTestEnvironment, RulesTestEnvironment } from '@firebase/rules-unit-testing';
import Home from '../components/home';

let testEnv;

beforeAll(async () => {
    const rulesResponse = await fetch('firestore.rules');
    const rules = await rulesResponse.text()
    testEnv = await initializeTestEnvironment({
        projectId: 'refract-book',
        firestore: { rules },
    });

    // Clear the Firestore database:
    await testEnv.clearFirestore();

    // setup the Firebase SDK to use emulators
    firebase.initializeApp({
        projectId: 'refract-book',
    });
    firebase.auth().useEmulator('http://127.0.0.1:9099');
    firebase.firestore().useEmulator('localhost', 8080);

});

afterAll(async () => {
    // clean up the firebase testing environment
    await testEnv.cleanup();
});

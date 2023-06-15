import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { BrowserRouter as Router, useNavigate } from "react-router-dom";
import Home from "../components/home";
import firebase from "firebase-mock";

// lets test basic for the <Home /> component

test("renders Home component", () => {
    // renders Home?
    render(
        <Router>
            <Home />
        </Router>
    );
    const titleElement = screen.getByText(/Login Home/i);
    expect(titleElement).toBeInTheDocument();
});

// test auth and firestore
// const mockAuth = new firebase.MockAuthentication();
// const mockFirestore = new firebase.MockFirestore();
// const navigate = useNavigate();

// test("navigate to Welcome if user is signed in and esist in users", async () => {
//     // mock signed in user
//     const mockUser = { uid: "user123" };
//     mockAuth.autoFlush();
//     mockAuth.setUser(mockUser);

//     // mock exist in firestore query
//     const mockUserDocSnapshot = { exist: true };
//     mockFirestore.autoFlush();
//     mockFirestore.mockCollection("users").mockDoc(mockUser.uid).mockGet(mockUserDocSnapshot);

//     // render the Home component
//     render(
//         <Router>
//             <Home />
//         </Router>
//     );

//     // Wait for navigation to occur to /welcome
//     await waitFor(() => expect(navigate).toHaveBeenCalledWith("/welcome"));

//     // Assert that navigation occured correctly
//     const titleElement = screen.getByText(/Welcome user/i);
//     expect(titleElement).toBeInTheDocument();
// });
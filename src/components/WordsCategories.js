import React from 'react';
import { MdCheckCircle as Check } from "react-icons/md";
import firebase from './Firebase/firebase';

import './WordsCategories.css';
import  { FirebaseContext } from './Firebase';

class WordsCategories extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            categories: [],
            userCategories: []
        }
    }

    componentDidMount() {
        let self = this;
        firebase
            .firestore()
            .collection('wordsCategories')
            .onSnapshot((snapshot => {
                const categories = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }));
                self.setState({categories: categories})
            }));
        firebase
            .firestore()
            .collection('users').doc('iwujmIzUgBoM8qNPO6S5').get().then(function(doc) {
                if (doc.exists) {
                    self.setState({userCategories: doc.data().categoriesId})
                } else {
                    console.log("No such document!");
                }
            }).catch(function(error) {
                console.log("Error getting document:", error);
            });
    }

    toggleUserCategory = (itemId) => {
        let userCategories;
        if (this.state.userCategories.includes(itemId)){
            userCategories = this.state.userCategories.filter(item => item !== itemId);
        } else {
            userCategories = [itemId, ...this.state.userCategories];
        }
        this.setState({userCategories});
        firebase
            .firestore()
            .collection('users').doc("iwujmIzUgBoM8qNPO6S5").set({
            categoriesId: userCategories});
    };

    render() {
        let categoriesItems;
        return (
            <div>
                {this.state.categories.map((item) =>
                    (<div>
                        <div className="category-item" onClick={this.toggleUserCategory.bind(this, item.id)}>
                            <div className="category-item__icon"><img src="../../logo192.png"/></div>
                            <div>{item.name}</div>
                            {this.state.userCategories.includes(item.id) ? (
                                <div className="category-item__check-icon"><Check/></div>
                            ) : null}
                        </div>
                    </div>)
                )}

            </div>
        )
    }
}

export default WordsCategories;
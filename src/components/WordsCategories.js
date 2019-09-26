import React from 'react';
import { MdCheckCircle as Check } from "react-icons/md";
import firebase from './Firebase/firebase';

import './WordsCategories.css';
import  { FirebaseContext } from './Firebase';

class WordsCategories extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            categories: []
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
                console.log(categories);
                self.setState({categories: categories})
            }))
    }

    render() {
        console.log(this.categories)
        // let categories = [
        //     {name:'Топ 100', checked: true},
        //     {name:'Топ 1000', checked: true},
        //     {name:'Топ 3000', checked: false},
        //     {name:'Базовые глаголы', checked: false},
        //     {name:'Базовые слова', checked: false},
        //     {name:'Семья', checked: true},
        //     {name:'Кухня', checked: false},
        //     {name:'Дни недели', checked: false},
        //     {name:'Время', checked: true},];
        // if (this.categories) {
        //     let categoriesItems = this.categories.map((item) => {
        //         return (
        //             <div>
        //                 <div className="category-item">
        //                     <div className="category-item__icon"><img src="../../logo192.png"/></div>
        //                     <div>{item.name}</div>
        //                     {item.checked ? (
        //                         <div className="category-item__check-icon"><Check/></div>
        //                     ) : null}
        //
        //                 </div>
        //             </div>
        //         )
        //     });
        // }
        // let databaseRef = database.collection('wordsCategories').get().then((res)=> {
        //     console.log(res)
        // });
        // console.log()
        let categoriesItems;
        // if (this.categories) {
        //     categoriesItems = this.categories.map((item) => {
        //         (
        //             <div>
        //                 <div className="category-item">
        //                     <div className="category-item__icon"><img src="../../logo192.png"/></div>
        //                     <div>{item.name}</div>
        //                     {item.checked ? (
        //                         <div className="category-item__check-icon"><Check/></div>
        //                     ) : null}
        //
        //                 </div>
        //             </div>
        //         )
        //     });
        //     console.log(categoriesItems)
        // }
        return (
            <div>
                {this.state.categories.map((item) =>
                    (<div>
                        <div className="category-item">
                            <div className="category-item__icon"><img src="../../logo192.png"/></div>
                            <div>{item.name}</div>
                            {item.checked ? (
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
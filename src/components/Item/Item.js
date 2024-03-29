import React from 'react'
import "./Item.css";
import {Link} from 'react-router-dom';
export default function Item({item}) {
    return (
        
        <div className="itemCard">
        <Link key={item.id} to={"/product/" + item.id} className="listStyle">
                <div className="itemImg" style={{backgroundImage: `url("${item.image}")`}}  alt=""/>
        </Link>
                <div className="itemData">
                    <div className="itemPrice">
                        <div>{item.price}$</div>
                        <div>
                            <div className='saveItem' onClick={() => {}} >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20.42 4.58002C19.9183 4.07659 19.3222 3.67716 18.6658 3.40461C18.0094 3.13206 17.3057 2.99176 16.595 2.99176C15.8843 2.99176 15.1806 3.13206 14.5242 3.40461C13.8678 3.67716 13.2717 4.07659 12.77 4.58002L12 5.36002L11.23 4.58002C10.7283 4.07659 10.1322 3.67716 9.47582 3.40461C8.81944 3.13206 8.11571 2.99176 7.40499 2.99176C6.69428 2.99176 5.99055 3.13206 5.33417 3.40461C4.67779 3.67716 4.08167 4.07659 3.57999 4.58002C1.45999 6.70002 1.32999 10.28 3.99999 13L12 21L20 13C22.67 10.28 22.54 6.70002 20.42 4.58002Z" stroke="black" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <div className='buyItem' onClick={() => {}} >
                                <svg  width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9 22C9.55228 22 10 21.5523 10 21C10 20.4477 9.55228 20 9 20C8.44772 20 8 20.4477 8 21C8 21.5523 8.44772 22 9 22Z" stroke="black"  strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"  />
                                    <path d="M20 22C20.5523 22 21 21.5523 21 21C21 20.4477 20.5523 20 20 20C19.4477 20 19 20.4477 19 21C19 21.5523 19.4477 22 20 22Z" stroke="black"  strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"  />
                                    <path  d="M1 1H5L7.68 14.39C7.77144 14.8504 8.02191 15.264 8.38755 15.5583C8.75318 15.8526 9.2107 16.009 9.68 16H19.4C19.8693 16.009 20.3268 15.8526 20.6925 15.5583C21.0581 15.264 21.3086 14.8504 21.4 14.39L23 6H6" stroke="black" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"  />
                                </svg>
                            </div>
                        </div>
                    </div>
        <Link key={item.id} to={"/product/" + item.id} className="listStyle">
                    <div key="brandName" className="brandName">{item.brand}</div>
                    <div key="itemName" className="itemName"><p>{item.name}</p></div>
        </Link>
                </div>
                
        </div>
    )
}

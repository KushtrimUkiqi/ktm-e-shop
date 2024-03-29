import React from 'react';
import "./NavigationTable.css";
import {Link} from 'react-router-dom';

export default function NavigationTable({id,className,links}) {


    return (
        
        <div id="table">
        <div id={id} className={className}
         key={id}>
            {links.map((category,index) =>
                <div key={index}>
                    <Link key={index} to={"/products/" + category.id} className="listStyle">
                       {category.name}
                    </Link>
                </div>
            )}
        </div>
        </div>
    )
}

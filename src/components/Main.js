import React, { useEffect, useState } from 'react';
import Data from './Data';

const Main = () => {

    const [theme, setTheme] = useState(false);

    const toggleTheme = () => {
        setTheme(!theme)
    };

    //Default dark mode.
    {/*useEffect(() => {
        setTheme(!theme)
    },[])*/}

    return (
        <main className={theme ? `main-dark` : ``}>
            <nav>
                <div className="nav-center">
                    <h1>overreacted</h1>
                    <button className={theme ? `btn btn-dark` : `btn`} onClick={toggleTheme}>
                        toggle
                    </button>
                </div>
            </nav>
            <section className="articles">
                {Data.map((item) => {
                    const {title, date, length, snippet} = item
                    return (
                        <article className={theme ? `post post-dark` : `post`}>
                            <h2>{title}</h2>
                            <div className='post-info'>
                                {/*<span>{moment(date).format('dddd, MMMM Do YYYY, h:mm:ss p')}</span>*/}
                                <span>{length} min read</span>
                            </div>
                            <p>{snippet}</p>
                        </article>
                    );
                })}
            </section>
        </main>
    );
}

export default Main;

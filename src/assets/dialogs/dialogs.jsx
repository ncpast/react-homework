import style from './Dialogs.module.css';   
import NoMatch from './NoMatch'
import Adminzgc from './adminzgc.jsx'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';

const Dialogs = () => {
    return (
        <section className={style.mainSection}>
            <nav id={style.people}>
                <section className={style.header}>
                    <h1>Dialogs</h1>
                    <p className={style.dialogText}><NavLink to='/chats/adminz_gc' className={style.chatLink}>adminz_gc</NavLink></p>
                    <p className={style.dialogText}><NavLink to='/chats/ye' className={style.chatLink}>ye</NavLink></p>
                </section>
            </nav>
            <div id={style.chat}>
                <Routes>
                    <Route path='/adminz_gc' element={<Adminzgc />}></Route>
                    <Route path='/ye' element={
                        <h1>Ye</h1>
                    }></Route>
                    <Route path='*' element={<NoMatch />}></Route>
                </Routes>
            </div>
        </section>
    )
}

export default Dialogs;
import React from 'react';
import Auxiliary from '../../hoc/Auxiliary';


const layout = (props) => (
    <Auxiliary>
        <div>Toolbar, sideDrawer, Backdrop
    <main>
                {props.children}
            </main>
        </div>
    </Auxiliary>
);

export default layout;
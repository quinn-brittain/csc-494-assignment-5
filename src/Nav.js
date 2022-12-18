import React from "react";

class Nav extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container-fluid">
                {/*eslint-disable-next-line*/}
                <a className="navbar-brand" href="#" data-ss1670639573="1">Ticket Sale</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarColor01">
                <ul className="navbar-nav me-auto">
                    <li className="nav-item">
                    {/*eslint-disable-next-line*/}
                    <a className="nav-link active" href="#" data-ss1670639573="1">Home
                        <span className="visually-hidden">(current)</span>
                    </a>
                    </li>
                    <li className="nav-item">
                    {/*eslint-disable-next-line*/}
                    <a className="nav-link" href="#" data-ss1670639573="1">Pricing</a>
                    </li>
                    <li className="nav-item">
                    {/*eslint-disable-next-line*/}
                    <a className="nav-link" href="#" data-ss1670639573="1">About</a>
                    </li>
                </ul>
                </div>
            </div>
            </nav>
        );
    };
}

export default Nav;
import React from "react";

class Nav extends React.Component {
    render() {
        return (
            <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
            <div class="container-fluid">
                {/*eslint-disable-next-line*/}
                <a class="navbar-brand" href="#" data-ss1670639573="1">Ticket Sale</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarColor01">
                <ul class="navbar-nav me-auto">
                    <li class="nav-item">
                    {/*eslint-disable-next-line*/}
                    <a class="nav-link active" href="#" data-ss1670639573="1">Home
                        <span class="visually-hidden">(current)</span>
                    </a>
                    </li>
                    <li class="nav-item">
                    {/*eslint-disable-next-line*/}
                    <a class="nav-link" href="#" data-ss1670639573="1">Pricing</a>
                    </li>
                    <li class="nav-item">
                    {/*eslint-disable-next-line*/}
                    <a class="nav-link" href="#" data-ss1670639573="1">About</a>
                    </li>
                </ul>
                </div>
            </div>
            </nav>
        );
    };
}

export default Nav;
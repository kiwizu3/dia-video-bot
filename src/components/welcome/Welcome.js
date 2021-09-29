import React from 'react';

const Welcome = ({ onClick }) => {

    return (
        <div className="container-fluid h-100">
            <div className="row h-100">
                <div className="col-lg-4 col-md-6 col-sm-12 m-auto">
                    <h1>Welcome, I'm Dia.</h1>
                    <div className="d-flex justify-content-center">
                        <button className="btn btn-diabot px-4 me-2" disabled onClick={onClick}>English</button>
                        <button className="btn btn-diabot sinhala-text px-4 me-2" onClick={onClick}>සිංහල</button>
                        <button className="btn btn-diabot px-4" disabled onClick={onClick}>தமிழ்</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Welcome
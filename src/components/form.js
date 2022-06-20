import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Form() {
    return (
        <>
            <div class="container mt-5 position-relative">
                <form autoComplete="off">
                    <div class="App mx-auto">
                        <div class="form-group ">
                            <h2>Sign In</h2> <br />
                            <label>Email :</label>
                            <input
                                type="email"
                                class="form-control"
                                id="email"
                                placeholder="Enter email"
                                name="email"
                            />
                        </div>
                        <div class="form-group">
                            <label>Password:</label>
                            <input
                                type="password"
                                class="form-control"
                                id="pwd"
                                placeholder="Enter password"
                                name="password"
                            />
                        </div>
                        <br />
                        <div>
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

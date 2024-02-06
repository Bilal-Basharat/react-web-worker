import React, { useEffect, useState } from 'react';
import { fetchUsers } from './sorting.js';
import worker from '../app.worker.js';
import WebWorker from '../web_worker.js';
import './home.css'

export default function Home() {
    const [isLoading, setIsLoading] = useState(true);
    const [users, setUsers] = useState([]);
    const [isSorting, setIsSorting] = useState(false);
    const webWorker = new WebWorker(worker);

    useEffect(() => {
        fetchUsers().then(users => {
            setUsers(users);
            setIsLoading(false);
        });

        return () => {
            webWorker.terminate()
        }
    }, []);

    
// function for ascending order sortion using web worker
    const sortAscendingWebWorker = () => {
        webWorker.postMessage({ users, type: "asc"});

        setIsSorting(true);

        webWorker.addEventListener('message', (event) => {
            const sortedList = event.data;

            setUsers(sortedList);
            setIsSorting(false);
        });

        return;
    }

// function for descending order sortion using web worker
    const sortDescendingWebWorker = () => {
        webWorker.postMessage({ users, type: "desc"});

        setIsSorting(true);
        
        webWorker.addEventListener('message', (event) => {
            const sortedList = event.data;

            setUsers(sortedList);
            setIsSorting(false);
        });
    }
    
 // function for ascending order sorting without web workers
const sortAscending = () => {
    setIsSorting(true);
    const sortedList = [...users].sort((a, b) => a.commentCount - b.commentCount);
    setUsers(sortedList);
    setIsSorting(false);
}

// function for descending order sorting without web workers
const sortDescending = () => {
    setIsSorting(true);
    const sortedList = [...users].sort((a, b) => b.commentCount - a.commentCount);
    setUsers(sortedList);
    setIsSorting(false);
}


    const renderUsers = () => {
        return users.map((user, index) => {
            return (
                <div key={index} className="card mt-4 mb-4">
                    <div className="card-header">
                        {user.name}
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">
                            {user.email}
                        </h5>
                        <p className="card-text">
                            {user.joinedOn.toString()}
                        </p>

                    </div>
                    <div className="card-footer text-muted">
                        {user.commentCount} comments
                    </div>
                </div>
            );
        });
    }
    return (
  
        <div className="container">
        <div className="row">
            <div className="col-md-12">
                
                {/* sort in ascending order without web workers */}
                <div className="btn-group mr-2 mt-2" role="group" aria-label="Basic example">
                    <button
                        onClick={sortAscending}
                        type="button"
                        disabled={isLoading}
                        className="btn btn-primary">
                        Ascending Order
                    </button>
                </div>

                {/* sort in descending order without web workers */}
                <div className="btn-group mt-2" style={{ marginLeft: '10px' }} role="group" aria-label="Basic example">
                    <button
                        onClick={sortDescending}
                        type="button"
                        disabled={isLoading}
                        className="btn btn-success">
                        Descending Order
                    </button>
                </div>
                
                {/* sort in ascending order using web workers */}
                <div className="btn-group mr-2 mt-2" role="group" aria-label="Basic example">
                    <button
                        onClick={sortAscendingWebWorker}
                        type="button"
                        disabled={isLoading}
                        className="btn btn-primary">
                        Ascending Order (Web-Worker) 
                    </button>
                </div>

                {/* sort in descending order using web workers */}
                <div className="btn-group mt-2" style={{ marginLeft: '10px' }} role="group" aria-label="Basic example">
                    <button
                        onClick={sortDescendingWebWorker}
                        type="button"
                        disabled={isLoading}
                        className="btn btn-success">
                        Descending Order (Web-Worker)
                    </button>
                </div>

            </div>
        </div>
    
        {isSorting && <div className="mt-4">
                    Sorting ...
                </div>}

        {isLoading &&
            <div className="mt-4">
                Loading ...
            </div>
        }

        {!isLoading &&
                <div className="col-md-12">
                    {renderUsers()}
                </div>
        }
    </div>

        );
}

import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { workersList } from './workerSlice';
import { add } from './workerSlice';

const Worker = () => {
    const dispatch = useDispatch();
    const workers = useSelector(workersList);

    const [toggleWorkers, setToggleWorkers] = useState(false);

    const getWorkers = async () => {
        const response = await fetch('http://127.0.0.1:8000/api/workers/');
        const data = await response.json();
        dispatch(add(data));
    };

    const toggleWorkersHandler = () => {
        setToggleWorkers(!toggleWorkers);
    };

    useEffect(() => {
        getWorkers();
    }, []);

    return (
        <div>
            <button onClick={toggleWorkersHandler}>Show workers</button>
            {workers &&
                workers.map((worker) => (
                    <div key={worker.id}>
                        <h2>
                            {worker.first_name} {worker.last_name}
                        </h2>
                        <ul>
                            {worker.jobs.map((job) => (
                                <li key={job.id}>{job.job_type}</li>
                            ))}
                        </ul>
                    </div>
                ))}
        </div>
    );
};

export default Worker;

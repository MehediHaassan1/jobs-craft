const addToDb = id => {
    let appliedJobs = {};

    const storedAppliedJobs = localStorage.getItem("applied-jobs");
    if (storedAppliedJobs) {
        appliedJobs = JSON.parse(storedAppliedJobs);
    }

    if (appliedJobs[id]) {
        const appliedJobsQuantity = appliedJobs[id];
        appliedJobs[id] = appliedJobsQuantity + 1;

    } else {
        appliedJobs[id] = 1;
    }

    localStorage.setItem("applied-jobs", JSON.stringify(appliedJobs));
}

const dataFromDb = () => {
    const data = localStorage.getItem("applied-jobs");
    if (data) {
        const storedData = JSON.parse(data);
        return storedData;
    } else {
        return {};
    }
}

export { addToDb, dataFromDb };
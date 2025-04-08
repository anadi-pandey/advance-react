import axios from 'axios';
import React, { useEffect, useState } from 'react';

const DataSourceRenderLoader = ({ getData = () => { }, render = () => { } }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [resource, setResource] = useState(null);

    useEffect(() => {
        (async () => {
            try {
                const data = await getData()
                console.log(data, "Recieved")
                setResource(data);
            } catch (err) {
                console.error(`Failed to load :`, err);
            } finally {
                setIsLoading(false);
            }
        })();
    }, [getData]);

    if (isLoading || resource === null) {
        return <h1>Loading...</h1>;
    }

    return render(resource);
};

export default DataSourceRenderLoader;
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const DataSourceLoader = ({ getData = () => { }, resourceName, children }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [resource, setResource] = useState(null);

    useEffect(() => {
        (async () => {
            try {
                const data = await getData()
                console.log(data, "Recieved")
                setResource(data);
            } catch (err) {
                console.error(`Failed to load ${resourceName}:`, err);
            } finally {
                setIsLoading(false);
            }
        })();
    }, [getData]);

    if (isLoading || resource === null) {
        return <h1>Loading {resourceName}...</h1>;
    }

    return (
        <>
            {React.Children.map(children, (child) => {
                if (React.isValidElement(child)) {
                    return React.cloneElement(child, { [resourceName]: resource });
                }
                return child;
            })}
        </>
    );
};

export default DataSourceLoader;
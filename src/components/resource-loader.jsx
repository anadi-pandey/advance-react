import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ResourceLoader = ({ resourceUrl, resourceName, children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [resource, setResource] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        console.log(resourceName, resourceUrl);
        const response = await axios.get(resourceUrl);
        console.log(response?.data, 'Response');
        setResource(response?.data);
      } catch (err) {
        console.error(`Failed to load ${resourceName}:`, err);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [resourceUrl]);

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

export default ResourceLoader;
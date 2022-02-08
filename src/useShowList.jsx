import React, {useState} from 'react';

const useShowList = () => {
    const [showList, setShowList] = useState('all');

    const handleShowList = (sta) => {
      setShowList(sta);
      }
  return {
    showList,
    handleShowList
  }
};

export default useShowList;

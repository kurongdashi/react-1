import React, { useEffect, useState } from 'react';

const Index: React.FC = () => {
    const [page, setPage] = useState('');

    useEffect(() => {
        setPage('hello')
    }, [])
    return <div>测试页面2-1-{page}</div>

}
export default Index;
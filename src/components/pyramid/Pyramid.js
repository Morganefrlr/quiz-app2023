


const Pyramid = ({questionNbr, pointPyramid}) => {

    
    return (
        <div className='pyramid'>
            <ul className='pointList'>
                {pointPyramid.map((point) => (
                    <li className={questionNbr === point.id ? 'pointRow selected' : 'pointRow'} key={point.id} >
                        <span className='pointRow_id'>{point.id}</span>
                        <span className='pointRow_point'>{point.point}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Pyramid;
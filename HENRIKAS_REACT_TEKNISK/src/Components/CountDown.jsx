import { useState, useEffect} from 'react';

function CountDown() {
    const [seconds, setSeconds] = useState(10);

    useEffect(() => {
        const interval = setInterval(() => {// starter en interval
            if (seconds > 0) {// hvis seconds er over 0 så setter den seconds til hva seconds er nå minus 1
                setSeconds(seconds - 1);
            }
        }, 1000);

        return () => clearInterval(interval);// denne stopper den nåverende interval
    })

    if (seconds <= 0) {
        return (
            <div>
                <p>Gratulerer med Dagen!</p>
            </div>
        )
    }

  return (
    <div>
        <p>{`00:${seconds < 10 ? '0' : ''}${seconds}`}</p>
    </div>
  )
}

export default CountDown
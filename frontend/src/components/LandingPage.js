import { useState } from 'react';
import QueryAPI from '../utils/QueryAPI';

export default function LandingPage() {
    const [url, seturl] = useState('');
    return (
        <div className="Landing-page">
            <h1 className="Logo">SECR</h1>
            <div className="Input-container">
                <form>
                    <input className="URL-input" value={url} type="text" placeholder="Enter URL" onInput={e => seturl(e.target.value)} /><input className="URL-submit" type="submit" value="Scan" onClick={QueryAPI(url)} />
                </form>
            </div>
        </div>
    );
}

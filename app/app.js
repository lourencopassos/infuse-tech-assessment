const { useState } = React;

const App = () => {
  const [string, setString ] = useState('');
  const [reversed, setReversed ] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setReversed('');
    setString(e.target.value);
  }

  const submit = async () => {
    try {
      setLoading(true);
      const response = await fetch('../data', {
        method: 'POST',
        body: JSON.stringify({ string }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      setReversed(data.reversed);
    } catch (e) {
      alert('Error reverting the string');
    }
    setLoading(false);
  }

  return (
    <div class="container">
      <div class="content">
        <h1>Infuse Tech Assessment</h1>
        <input type="text" value={string} onChange={handleChange} placeholder="Input your string to reverse" />
        <button onClick={submit}>Reverse</button>
        {reversed && !loading && <div class="reversed">
          <p>Your reversed string is:</p> {reversed}</div>}
      </div>
    </div>
  )
};

ReactDOM.render(<App />, document.querySelector("#app"));
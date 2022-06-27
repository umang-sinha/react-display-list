function App() {
  const list = ["John", "David", "Sean", "Travis", "Adam"];
  return (
    <div>
      <h1>List of Names</h1>
      <section>
        <ul>
          {list.map(item => (
            <li key={item}>{item}</li>
            ))}
        </ul>
      </section>
    </div>
  );
}

export default App;

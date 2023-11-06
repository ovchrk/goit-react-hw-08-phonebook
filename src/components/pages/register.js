export default function RegisterPage() {
  return (
    <>
      <h1>Registration Page</h1>
      <form>
        <label>
          Name
          <input type="text"></input>
        </label>
        <label>
          e-mail
          <input type="email" name="email"></input>
        </label>
        <label>
          password
          <input></input>
        </label>
        <button type="submit">Register</button>
      </form>
    </>
  );
}

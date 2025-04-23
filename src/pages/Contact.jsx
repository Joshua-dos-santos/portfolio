const Contact = () => {
    return (
      <div>
        <h2>Contacteer mij</h2>
        <form>
          <label>
            Naam:
            <input type="text" name="name" />
          </label>
          <label>
            E-mail:
            <input type="email" name="email" />
          </label>
          <label>
            Bericht:
            <textarea name="message"></textarea>
          </label>
          <button type="submit">Verstuur</button>
        </form>
      </div>
    );
  };
  
  export default Contact;
  
import usePosts from "./hooks/usePosts";

function App() {
  const posts = usePosts();

  return (
    <>
      <header>
        <h1 style={{ display: "flex" }}>
          <span aria-hidden style={{ marginRight: "1rem" }}>
            <img src="/assets/icon.svg" width={36} height={36} />
          </span>
          <span>Vite PWA</span>
        </h1>
      </header>

      <hr />

      <section>
        <h2>Posts</h2>
        <ul>
          {posts?.slice(0, 5).map((post) => (
            <li key={post.id}>
              <article>
                <p style={{ textTransform: "capitalize" }}>{post.title}</p>
              </article>
            </li>
          ))}
        </ul>
      </section>

      <hr />

      <form>
        <h2>Create a new post</h2>

        <fieldset>
          <label>
            Title
            <input type="text" name="title" />
          </label>

          <label>
            Body
            <textarea name="body" />
          </label>

          <button>Submit</button>
        </fieldset>

        <output>
          <pre>
            <code>
              <span>Lorem ipsum dolor sit amet,</span>
              <br />
              <span>consectetur adipiscing elit.</span>
            </code>
          </pre>
        </output>
      </form>

      <hr />

      <section>
        <h2>Image</h2>
        <img
          src="/assets/bordeaux.jpg"
          width={400}
          height={300}
          alt="boreaux.jpg"
        />
      </section>

      <br />
      <br />

      <footer
        style={{
          position: "fixed",
          right: "2rem",
          bottom: "2rem",
          background: "#2e3440",
          padding: "1rem",
          borderRadius: "4px",
          border: "1px solid #3b4252",
        }}
      >
        <div>
          <strong>Are we online?</strong>
        </div>
        <div>Yes</div>
      </footer>

      <br />
      <br />
    </>
  );
}

export default App;

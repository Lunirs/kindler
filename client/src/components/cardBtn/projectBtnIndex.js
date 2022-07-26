function ProjectBtn({ text, onClick }) {
  const styles = {
    btn: {
      backgroundColor: "#0094ff",
      color: "#fff",
      border: "none",
      outline: "none",
      fontSize: "1.2rem",
      borderRadius: "10px",
      padding: "11px 1rem",
      width: "7.5rem",
    },
  };

  function Change() {
    console.log("Project Button Clicked");
  }

  return (
    <button onClick={Change} style={styles.btn}>
      {text}
    </button>
  );
}

export default ProjectBtn;

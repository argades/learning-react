
const Person = {
  name: 'Pablo',
  lastName: 'Picaso',
  job: 'Artist'
}

const person = () => {
  return Person;
};

function FirstApp() {



  return (
    <>
      <code>{ JSON.stringify( person()) }</code>
    </>
  )
}

export default FirstApp;

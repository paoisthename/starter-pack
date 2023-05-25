const About = () => (
    <div className="text-white px-32 mt-32 container">
        <h1 className="text-6xl font-semibold leading-normal">About</h1>
        <h3 className="text-4xl font-semibold leading-normal">About</h3>
        <p>Hanapin ang trabaho na para sayo!</p>

        <div className="mt-10 text-white">
            <a href="#" className="bg-yellow-300 rounded-3xl py-3 px-8 font-medium inline-block
                        mr-4 hover:bg-transparent hover:text-white duration-300 hover:border border border-transparent">
                &#9998; Apply now!
            </a>
            <a href="#" className="bg-yellow-300 rounded-3xl py-3 px-8 font-medium inline-block
                        mr-4 hover:bg-transparent hover:text-white duration-300 hover:border border border-transparent">
                &#9755; Job Fair Schedules
            </a>
        </div>
        <img src="/images/model.png" className="w-full xl:h-4/5 xl:w-1/4 xl:absolute bottom-0 right-36" />
    </div>
);

export default About;
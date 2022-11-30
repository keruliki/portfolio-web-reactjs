import { useContext } from "react";
import AboutMeContext from "../../context/AboutMeContext";
import AboutClientSingle from "./AboutClientSingle";

const AboutClients = () => {
  const { clientsData } = useContext(AboutMeContext);

  return (
    <div className="mt-10 sm:mt-20">
      <p className="font-general-medium text-2xl sm:text-3xl  text-center text-primary-dark dark:text-primary-light">
        My Work Experience
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-4 mt-10 sm:mt-14 gap-2">
        {clientsData.map((client) => (
          <AboutClientSingle
            title={client.title}
            image={client.img}
            key={client.id}
          />
        ))}
      </div>
      <div>
        <h3>Example Inc</h3>
        <section class="mb-6">
          <div class="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
            Jul.&nbsp;2019:
          </div>
          <div class="lg:inline-block lg:w-8/12 w-full">
            Fullstack Developer
          </div>
        </section>
        <section class="mb-6">
          <div class="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
            Task:
          </div>
          <div class="lg:inline-block lg:w-8/12 w-full">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </div>
        </section>
        <section class="mb-6">
          <div class="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
            Description:
          </div>
          <div class="lg:inline-block lg:w-8/12 w-full">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </div>
        </section>
        <section class="mb-6">
          <div class="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
            Tools:
          </div>
          <div class="lg:inline-block lg:w-8/12 w-full">
            <span class="rounded-xl bg-gray-300 px-3">Vue</span>
            <span class="rounded-xl bg-gray-300 px-3">Vuex</span>
            <span class="rounded-xl bg-gray-300 px-3">Bootstrap</span>
            <span class="rounded-xl bg-gray-300 px-3">Docker</span>
            <span class="rounded-xl bg-gray-300 px-3">Git</span>
            <span class="rounded-xl bg-gray-300 px-3">Bitbucket</span>
            <span class="rounded-xl bg-gray-300 px-3">Jira</span>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutClients;

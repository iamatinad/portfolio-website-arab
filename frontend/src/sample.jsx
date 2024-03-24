// import { useEffect } from "react";
import { useEffect } from "react";
import "./App.css";
import { apiGetAllSkills, apiGetSkill } from "./services/skills.services";
import { apiGetAchievement, apiGetAllAchievements } from "./services/achievements.services";
import { apiGetAllBlogs } from "./services/blogs.services";
import { apiGetAllExperiences, apiGetExperience } from "./services/experiences.services";
import { apiGetAllProjects, apiGetProject } from "./services/projects.services";

function App() {
  // const fetchData = async () => {
  //   const skills = await apiGetAllSkills();
  //   console.log(skills.data);
  //   const single_skill = await apiGetSkill("65f87080176aa66e94ca33f9");
  //   console.log(single_skill.data);
  // };

  useEffect(() => {
    (async () => {
      //sample request to get all skills
      const skills = await apiGetAllSkills();
      console.log(skills.data);

      //sample request to get a single skill
      const single_skill = await apiGetSkill("65f87080176aa66e94ca33f9");
      console.log(single_skill.data);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      //sample request to get all achievements
      const achievements = await apiGetAllAchievements();
      console.log(achievements.data);

      //sample request to get a single achievements
      const single_achievement = await apiGetAchievement("");
      console.log(single_achievement.data);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      //sample request to get all blogs
      const blogs = await apiGetAllBlogs();
      console.log(blogs.data);

      //sample request to get a single blog
      const single_blog = await apiGetBlog("");
      console.log(single_blog.data);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      //sample request to get all experiences
      const experiences = await apiGetAllExperiences();
      console.log(experiences.data);

      //sample request to get a single experience
      const single_experience = await apiGetExperience("");
      console.log(single_experience.data);
    })();
  }, []);
  useEffect(() => {
    (async () => {
      //sample request to get all projects
      const projects = await apiGetAllProjects();
      console.log(projects.data);

      //sample request to get a single project
      const single_project = await apiGetProject("");
      console.log(single_project.data);
    })();
  }, []);
  return <></>;
}

export default App;

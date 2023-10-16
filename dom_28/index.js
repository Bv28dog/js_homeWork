import { Octokit } from "https://esm.sh/octokit";

class GitHubUsers {
  constructor() {
    this.#octokit = new Octokit({
      auth: "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",
    });
  }
  #octokit;
  users;

  loadUsers = async () => {
    const { data } = await this.#octokit.request("GET /users");
    this.users = data;
  };
  loadFollowers = async (user) => {
    const { data } = await this.#octokit.request(
      `GET /users/${user.login}/followers`
    );
    user.followers = data.length;
  };

  createCards = () => {
    if (this.users) {
      this.users.forEach((user) => {
        const card = document.createElement("div");
        card.style.border = "1px solid black";
        card.style.borderRadius = "20px";
        card.style.padding = "20px";
        card.style.display = "flex";
        card.style.gap = "20px";
        const avatar = document.createElement("img");
        avatar.style.borderRadius = "50%";
        avatar.style.width = "200px";
        const texContainer = document.createElement("div");
        const logo = document.createElement("p");

        const followers = document.createElement("p");
        const organization = document.createElement("p");
        const repos = document.createElement("p");

        avatar.src = user.avatar_url;
        logo.innerText = user.login;

        followers.innerText = `Followers: ${user.followers}`;
        organization.innerText = user.organizations_url;
        repos.innerText = `Public Repos: ${user.repos_url}`;

        texContainer.append(logo, followers, organization, repos);
        card.append(avatar, texContainer);
        document.body.append(card);
      });
    }
  };
}

const gitHubUsers = new GitHubUsers();
gitHubUsers.loadUsers().then(() => {
  gitHubUsers.createCards();
});

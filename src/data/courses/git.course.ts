// Git and Github Course
//
//

import GitGitHubIntroMdx from "../content/git-and-github.mdx";
import GitBranchingMdx from "../content/git-branching.mdx";
import GitCommandsMdx from "../content/git-commands.mdx";
import GitCommitingMdx from "../content/git-commiting.mdx";
import GitMergingMdx from "../content/git-merging.mdx";
import GitPullRequestMdx from "../content/git-pull-request.mdx";
import GitRepositoriesMdx from "../content/git-repositories.mdx";
import GitTermsMdx from "../content/git-terms.mdx";

import type { Course } from "../types";

export const gitCourse: Course = {
	id: "git-and-github",
	name: "Git and Github",
	description:
		"Learn the fundamentals of Source Control Management using git and GitHub.",
	modules: [
		{
			id: "git-and-github-modules",
			name: "Git and GitHub Lessons",
			description: "Git and GitHub Lessons",
			resources: [
				{
					resourceType: "guide",
					id: "git-introduction",
					name: "Git and GitHub Introduction",
					description: "Introduce the Git Cource.",
					content: GitGitHubIntroMdx,
					completed: false,
					icon: "book",
					iconColor: "red",
				}, // end of gitCourse Introduction Module
				{
					resourceType: "guide",
					id: "git-terms",
					name: "Git Terminology",
					description: "List of terms and concepts for using SCM and git",
					content: GitTermsMdx,
					completed: false,
					icon: "book",
					iconColor: "red",
				}, // end of gitCourse Git Terms Module
				{
					resourceType: "guide",
					id: "git-repositories",
					name: "Git Repositories",
					description: "Git Local and Remote Repositories",
					content: GitRepositoriesMdx,
					completed: false,
					icon: "book",
					iconColor: "red",
				}, // end of gitCourse Repository Module
				{
					resourceType: "guide",
					id: "git-branching",
					name: "Git Branching",
					description: "Git Branching",
					content: GitBranchingMdx,
					completed: false,
					icon: "book",
					iconColor: "red",
				}, // end of gitCourse Branching Module
				{
					resourceType: "guide",
					id: "git-commits",
					name: "Git Commiting",
					description: "Git Committing",
					content: GitCommitingMdx,
					completed: false,
					icon: "book",
					iconColor: "red",
				}, // end of gitCourse Commits Module
				{
					resourceType: "guide",
					id: "git-merging",
					name: "Git Merging",
					description: "Git Merging",
					content: GitMergingMdx,
					completed: false,
					icon: "book",
					iconColor: "red",
				}, // end of gitCourse Merging Module
				{
					resourceType: "guide",
					id: "git-pull-request",
					name: "GitHub Pull Request",
					description: "GitHub Pull Request",
					content: GitPullRequestMdx,
					completed: false,
					icon: "book",
					iconColor: "red",
				}, // end of gitCourse Pull Request Module
				{
					resourceType: "guide",
					id: "git-commands",
					name: "Git CLI Commands",
					description: "Git CLI Commands",
					content: GitCommandsMdx,
					completed: false,
					icon: "book",
					iconColor: "red",
				}, // end of gitCourse GIT Commands Module
			], // end of gitCourse Resources
		},
	], // end of gitCourse modules
}; // end of gitCourse

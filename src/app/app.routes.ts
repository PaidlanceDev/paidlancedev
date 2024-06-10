import { Routes } from "@angular/router";
import { HomeComponent } from "./components/pages/home/home.component";
import { SignInComponent } from "./components/auth/sign-in/sign-in.component";
import { FqaComponent } from "./components/pages/fqa/fqa.component";
import { TermsOfServiceComponent } from "./components/pages/terms-of-service/terms-of-service.component";
import { AccountTypeComponent } from "./components/auth/account-type/account-type.component";
import { AllTalentComponent } from "./components/pages/all-talent/all-talent.component";
import { AllProjectsComponent } from "./components/pages/all-projects/all-projects.component";
import { TalentDisplayComponent } from "./components/pages/talent-display/talent-display.component";
import { LayoutComponent } from "./components/layout/layout/layout.component";
import { DashboardComponent } from "./components/layout/dashboard/dashboard.component";
import { ClientNewProjectComponent } from "./components/clients/client-new-project/client-new-project.component";
import { ClientProjectsComponent } from "./components/clients/client-projects/client-projects.component";
import { ClientMatchesComponent } from "./components/clients/client-matches/client-matches.component";
import { TalentProjectsComponent } from "./components/talents/talent-projects/talent-projects.component";
import { TalentNewProjectComponent } from "./components/talents/talent-new-project/talent-new-project.component";
import { TalentMatchesComponent } from "./components/talents/talent-matches/talent-matches.component";

export const routes: Routes = [
	{
		path: "",
		component: LayoutComponent,
		children: [
			{ path: "", component: HomeComponent, pathMatch: "full" },
			{ path: "sign-in", component: SignInComponent },
			{ path: "account-type", component: AccountTypeComponent }, // TO-DO - protect this route
			{ path: "all-talent", component: AllTalentComponent },
			{ path: "all-talent/:talentUsername", component: TalentDisplayComponent },
			{ path: "all-projects", component: AllProjectsComponent },
			{ path: "fqa", component: FqaComponent },
			{ path: "tos", component: TermsOfServiceComponent },
		],
	},
	{
		path: "client", // TO-DO auth gard
		component: DashboardComponent,
		children: [
			{ path: "projects", component: ClientProjectsComponent},
			{ path: "", redirectTo: "projects", pathMatch: "full"},
			{ path: "new", component: ClientNewProjectComponent },
			{ path: "matches", component: ClientMatchesComponent },
		],
	},
	{
		path: "talent", // TO-DO auth gard
		component: DashboardComponent,
		children: [
			{ path: "projects", component: TalentProjectsComponent},
			{ path: "", redirectTo: "projects", pathMatch: "full"},
			{ path: "new", component: TalentNewProjectComponent },
			{ path: "matches", component: TalentMatchesComponent },
		],
	},

	{ path: "**", redirectTo: "", pathMatch: "full" },
];

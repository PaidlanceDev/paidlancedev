import { Injectable } from "@angular/core";
import { createClient, SupabaseClient } from "@supabase/supabase-js";
import { environment } from "../../environments/environment";

@Injectable({
	providedIn: "root",
})
export class TestService {
  private supabase!: SupabaseClient;

	constructor() {
		this.supabase = createClient(
      environment.supabase.url,
			environment.supabase.key
    );
	}

  async getAllTestData() {
    // try {
		// 	const { data, error } = await this.supabase
    //   .from("test")
    //   .select("*");
		// 	if (error) {
		// 		console.error(error);
		// 	} else {
    //     console.log(data);
		// 	}
		// 	return data;
		// } catch (error) {
		// 	console.error(error);
		// 	return null;
		// }
  }
}

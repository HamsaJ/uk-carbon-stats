import { HomeController } from "./home";
import { WordSimController } from "./similarity";
import { DependencyController } from "./dependency";
import { NERController } from "./ner";
import { POSController } from "./pos";
import { GraphQLController } from "./graphql";

/**
 * Contains a list of instantiated controllers to add to the server
 */
 
export const CONTROLLERS = [
    new HomeController(),
    new WordSimController(),
    new DependencyController(),
    new NERController(),
    new POSController(), 
    new GraphQLController()
];
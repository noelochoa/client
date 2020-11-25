import createMutationsSharer from "vuex-shared-mutations";

export default async ({ store }) => {
    createMutationsSharer({
        predicate: [
            "auth/SET_XSRF_AUTH",
            "auth/SET_BOOL_AUTH",
            "auth/SET_NAME_AUTH",
            "auth/RESET_AUTH"
        ]
    })(store);
};

var search_data = {"index":{"searchIndex":["object","tyccl","containers","logger","yaml","combine_id()","compare_id()","cut_id()","dist()","gen_findstring()","get_dist_by_id()","get_equal()","get_id_sum()","get_ids_by_wildcard()","get_ids_by_word()","get_index_sum()","get_same()","get_sim_by_id()","get_similar()","get_words_by_id()","has_equal?()","has_same?()","has_single?()","sim()","readme"],"longSearchIndex":["object","tyccl","tyccl::containers","tyccl::logger","tyccl::yaml","tyccl::combine_id()","tyccl::compare_id()","tyccl::cut_id()","tyccl::dist()","tyccl::gen_findstring()","tyccl::get_dist_by_id()","tyccl::get_equal()","tyccl::get_id_sum()","tyccl::get_ids_by_wildcard()","tyccl::get_ids_by_word()","tyccl::get_index_sum()","tyccl::get_same()","tyccl::get_sim_by_id()","tyccl::get_similar()","tyccl::get_words_by_id()","tyccl::has_equal?()","tyccl::has_same?()","tyccl::has_single?()","tyccl::sim()",""],"info":[["Object","","Object.html","",""],["Tyccl","","Tyccl.html","","<p>class Tyccl is a singleton class, no Tyccl.new() method instead of\nTyccl.instance() to keep Tyccl object …\n"],["Tyccl::Containers","","Tyccl/Containers.html","",""],["Tyccl::Logger","","Tyccl/Logger.html","",""],["Tyccl::YAML","","Tyccl/YAML.html","",""],["combine_id","Tyccl","Tyccl.html#method-c-combine_id","(frame)","<p>the method #cut_id`s inverse process.\n"],["compare_id","Tyccl","Tyccl.html#method-c-compare_id","(idA, idB)","<p>Given idA(string) and idB(string). Returns fisrt diffrent place of their\nsegment, place vlaues in. if …\n"],["cut_id","Tyccl","Tyccl.html#method-c-cut_id","(id)","<p>Given a id(string). Returns an array that contains 5 strings which are ID`s\ndiffrent segment, like: …\n"],["dist","Tyccl","Tyccl.html#method-c-dist","(wordA, wordB)","<p>Given wordA(string) and wordB(string). Returns a Struct Result_t which\ncontains idA, idB, and shortest …\n"],["gen_findstring","Tyccl","Tyccl.html#method-c-gen_findstring","(code, start_index)","<p>Given a word(string) and start_index(int),start_index`s value  range is\n[0,4], corresponding Cilin(同义词词林) …\n"],["get_dist_by_id","Tyccl","Tyccl.html#method-c-get_dist_by_id","(idA, idB)","<p>Given idA(string) and idB(string). Returns semantic distance(int) between\nidA and idB, values in [0,10]. …\n"],["get_equal","Tyccl","Tyccl.html#method-c-get_equal","(word)","<p>Given a word(string).  Returns a two dimensional array that contains the\nparameter Word`s  equivalent …\n"],["get_id_sum","Tyccl","Tyccl.html#method-c-get_id_sum","()","<p>Returns the total number of different ID in Cilin.\n"],["get_ids_by_wildcard","Tyccl","Tyccl.html#method-c-get_ids_by_wildcard","(wildcard)","<p>Returns a sorted array containing IDs(string) that match the parameter\nWildcard(string).  The wildcard …\n"],["get_ids_by_word","Tyccl","Tyccl.html#method-c-get_ids_by_word","(word)","<p>Returns an array containing IDs(string) that the parameter Word(string)\nmatchs.\n<p>tips: the same word may …\n"],["get_index_sum","Tyccl","Tyccl.html#method-c-get_index_sum","()","<p>Returns the total number of different words in Cilin.\n"],["get_same","Tyccl","Tyccl.html#method-c-get_same","(word)","<p>Given a word(string).  Returns a two dimensional array that contains the\nparameter Word`s  synonym which …\n"],["get_sim_by_id","Tyccl","Tyccl.html#method-c-get_sim_by_id","(idA, idB)","<p>Given idA(string) and idB(string). Returns similarity(float) between idA\nand idB, values in [0,1].\n"],["get_similar","Tyccl","Tyccl.html#method-c-get_similar","(word, level=4)","<p>Given a word(string) and a level(int),level`s value range is [0,4], 4 is\ndefault, value of level is more …\n"],["get_words_by_id","Tyccl","Tyccl.html#method-c-get_words_by_id","(id)","<p>Given id(string) such as:“Aa01A01=” “Aa01A03#” Returns an array containing\nwords(string) …\n"],["has_equal?","Tyccl","Tyccl.html#method-c-has_equal-3F","(word)","<p>Given a word(string). Test to see if the parameter Word has any equivalent\nword. Returns true or false. …\n"],["has_same?","Tyccl","Tyccl.html#method-c-has_same-3F","(word)","<p>Given a word(string). Test to see if the parameter Word has any synonym.\nReturns true or false.\n"],["has_single?","Tyccl","Tyccl.html#method-c-has_single-3F","(word)","<p>Given a word(string). Test to see if the parameter Word has any ID whose\ncorresponding  words list just …\n"],["sim","Tyccl","Tyccl.html#method-c-sim","(wordA, wordB)","<p>Given wordA(string) and wordB(string). Returns a Struct Result_t which\ncontains the most similar Pairs …\n"],["README","","README_md.html","","<p>Tyccl\n<p>tyccl(同义词词林 哈工大扩展版) is a ruby gem that provides friendly functions to\nanalyse similarity between …\n"]]}}
// https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/

var lengthOfLongestSubstring = function(s) {
    let res = 0, obj = {}, n = s.length
    for(let i = 0, j = 0; i < n; i++){
        if(obj[s[i]] != undefined){
            obj[s[i]]++;
        }else obj[s[i]] = 1;
        while(obj[s[i]] > 1){
            obj[s[j++]]--;
        }
        res = Math.max(res, i - j + 1)
    }
    return res
};
console.log(lengthOfLongestSubstring("abcabcbb"))
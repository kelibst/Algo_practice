# Your code here
def take(array, pos=1)
    # array[pos..-1]
    
    # array[pos..array.length-1]
    # array.shift()

return array if pos ==0
      return array.slice(pos, array.length-1)
end

#     take([1,2,3], 1)
# [2, 3]
# > take([1,2,3], 2)
# [3]
# > take([1,2,3])
# [2, 3]

 p take([1,2,3])
 p take([1,2,3], 1)
 p take([1,2,3], 2)
 p take([1,2,3], 0)
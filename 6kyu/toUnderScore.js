const toUnderScore = name => {
    if (name=='')
      return name
    var ans=name[0];
    for (var i=1; i<name.length; ++i)
    {
      if (name[i]>='A' && name[i]<='Z' && name[i-1]!='_')
        ans+='_'+name[i];
      else if (name[i]>='0' && name[i]<='9'&& name[i-1]!='_' && name[i-1]!='0' && name[i-1]!='1'&& name[i-1]!='2')
      {
        ans+='_';
        while (i!=name.length && name[i]>='0' && name[i]<='9')
          ans+=name[i++];
        i--;
      } else
      ans+=name[i];
    }
    return ans;
  }